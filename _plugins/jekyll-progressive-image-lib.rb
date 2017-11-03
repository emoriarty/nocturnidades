module Jekyll
  class ProgressiveImageLib
    HEAD_END_TAG = %r!</.*head>!
    BODY_END_TAG = %r!</.*body>!

    class << self
      def append_snippet(doc)
        if doc.output =~ BODY_END_TAG
          # Insert JS code.
          doc.output.gsub!(BODY_END_TAG, %(#{js_lib}#{Regexp.last_match}))
        end
        if doc.output =~ HEAD_END_TAG
          # insert CSS code.
          doc.output.gsub!(HEAD_END_TAG, %(#{css_lib}#{Regexp.last_match}))
        end
      end

      private
      def js_lib
        js_content = IO.read(File.join(File.dirname(__FILE__), 'progressive-image-loader.min.js'))
        <<HTML
  <script type='text/javascript'>
    #{js_content}
  </script>
HTML
      end

      def css_lib
        css_content = IO.read(File.join(File.dirname(__FILE__), 'progressive-image-loader.min.css'))
        <<HTML
<style>
  #{css_content}
</style>
HTML
      end
    end
  end

  Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
    if doc.output =~ %r!class="placeholder.*"!
      Jekyll::ProgressiveImageLib.append_snippet(doc)
    end
  end
end

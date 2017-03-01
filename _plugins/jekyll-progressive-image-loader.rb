module Jekyll
  # TODO
  # Read measures from image file
  # Lazy loading
  # Thanks to https://jmperezperez.com/medium-image-progressive-loading-placeholder/
  class ProgressivePictureTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @attributes = {}
      markup.scan(::Liquid::TagAttributes) do |key, value|
        # Strip quotes from around attribute values
        @attributes[key.to_sym] = value.gsub(/^['"]|['"]$/, '')
      end
    end

    def render(context)
      aspect_ratio_percentage = (@attributes[:height].to_f / @attributes[:width].to_f) * 100
      %Q{
<figure>
  <div class="placeholder" data-large="#{@attributes[:src]}">
    <img src="#{@attributes[:thumbnail]}" class="img-small">
    <div style="padding-bottom: #{aspect_ratio_percentage}%;"></div>
  </div>
</figure>
      }
    end
  end

  class ProgressiveLibTag < Liquid::Tag
    def render(context)
      %q{
        <script type="text/javascript">
          window.addEventListener('load', function() {
            var placeholder = document.querySelector('.placeholder'),
                small = placeholder.querySelector('.img-small');
    
            // 1: load small image and show it
            var img = new Image();
            img.src = small.src;
            img.onload = function () {
              small.classList.add('loaded');
            };
    
            // 2: load large image
            var imgLarge = new Image();
            imgLarge.src = placeholder.dataset.large; 
            imgLarge.onload = function () {
              imgLarge.classList.add('loaded');
            };
            placeholder.appendChild(imgLarge);
          })
        </script>
      }
    end
  end

  class ProgressiveStyleTag < Liquid::Tag
    def render(context)
      %q{
        <style>
          .placeholder {
            background-color: #f6f6f6;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
            overflow: hidden;
          }

          .placeholder img {
            position: absolute;
            opacity: 0;
            top: 0;
            left: 0;
            width: 100%;
            transition: opacity 1s linear;
          }

          .placeholder img.loaded {
            opacity: 1;
          }

          .img-small {
            filter: blur(50px);
            /* this is needed so Safari keeps sharp edges */
            transform: scale(1);
          }
        </style>
      }
    end
  end
end

Liquid::Template.register_tag('progressive_picture', Jekyll::ProgressivePictureTag)
Liquid::Template.register_tag('progressive_lib', Jekyll::ProgressiveLibTag)
Liquid::Template.register_tag('progressive_style', Jekyll::ProgressiveStyleTag)

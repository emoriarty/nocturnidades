module Jekyll
  # class << self
  #   old_sanitized_path = instance_method(:sanitized_path)
  #
  #   def sanitized_path(base_directory, questionable_path)
  #     puts 'new sanitized_path'
  #     return base_directory if base_directory.eql?(questionable_path)
  #
  #     questionable_path.insert(0, "/") if questionable_path.start_with?("~")
  #     File.expand_path(questionable_path, "/")
  #   end
  # end
end

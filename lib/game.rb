class Game

  include FontAwesome

  def self.fetch_cards
    selected_cards = ICONS.take(18)
    selected_cards *= 2
    selected_cards.shuffle
    [].tap do |results|
      selected_cards.each_with_index { |item, index| results << {index: index, icon: item} }
    end
  end

end
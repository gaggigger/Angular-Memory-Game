class Game

  include FontAwesome

  def self.fetch_cards
    selected_cards = ICONS.take(18)
    selected_cards *= 2
    selected_cards.shuffle
  end

end
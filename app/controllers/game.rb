AngularMemoryGame::App.controllers :game do

  get :index do
    render 'game/index'
  end

  get :cards do
    json({:cards => Game.fetch_cards})
  end

  # get :sample, :map => '/sample/url', :provides => [:any, :js] do
  #   case content_type
  #     when :js then ...
  #     else ...
  # end

  # get :foo, :with => :id do
  #   'Maps to url '/foo/#{params[:id]}''
  # end

  # get '/example' do
  #   'Hello world!'
  # end


end

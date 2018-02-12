class Admin::SessionsController < Admin::ApplicationController
  before_action :authorize, except: [:index, :create]

  def index

  end

  def create
  	@moderator = Moderator.find_by(username: params[:usename]).try(:authenticate, params[:password])
  	if @moderator
  		
  		session[:current_moderator_id] = @moderator.id
  		redirect_to admin_moderators_url, notice: @moderator.fullname + ' is logged in'
  	
  	else
  		
  		flash[:alert] = 'There is a problem with your username or password.'
  		render :index

  	end

  end

  def destroy
  	session[:current_moderator_id] = nil
  	redirect_to '/login', notice: 'You have logged out.' 
  end
end

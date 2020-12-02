# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  before_action :configure_devise_parameters, if: :devise_controller?

  def configure_devise_parameters
    devise_parameter_sanitizer.permit(:sign_up) {|u| u.permit(:role, :first_name, :last_name, :email, :password, :password_confirmation, :current_password)}
    devise_parameter_sanitizer.permit(:account_update) {|u| u.permit(:role, :first_name, :last_name, :email, :password, :password_confirmation, :current_password)}
  end


  def render_jsonapi_response(resource)
    if resource.errors.empty?
      render jsonapi: resource
    else
      render jsonapi_errors: resource.errors, status: 400
    end
  end


  def authenticate_admin!
    if !current_user.admin?
      render json: {user: current_user ,error: "Current user must be an admin."}, status:403
      return false
    end
    return true
  end
  
  def authenticate_student!
    if !current_user.student?
      render json: {user: current_user ,error: "Current user must be an student."}, status:403
      return false
    end
    return true
  end

  def authenticate_teacher!
    if !current_user.teacher?
      render json: {user: current_user ,error: "Current user must be an teacher."}, status:403
      return false
    end
    return true
  end
end
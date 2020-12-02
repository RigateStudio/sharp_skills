class RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_user!, only: [:update, :create, :destroy]
  before_action :authenticate_student!, only: [:update, :create, :destroy]

    def create
      build_resource(sign_up_params)
      resource.save
      sign_up(resource_name, resource) if resource.persisted?
  
      render_jsonapi_response(resource)
    end
  end
class ApplicationController < ActionController::Base
    before_action :configure_permitted_parameters, if: :devise_controller?

    def after_sign_in_path_for(resource)
        request.env['omniauth.origin'] || stored_location_for(resource) || root_path
    end
    
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: 
        [:nickname, :avatar, :crop_x, :crop_y, :crop_width, :crop_height]
      )
      devise_parameter_sanitizer.permit(:account_update, keys:
        [:nickname, :avatar, :crop_x, :crop_y, :crop_width, :crop_height]
      )
    end
end

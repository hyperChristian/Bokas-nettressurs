module ApplicationHelper
		def status_converter(status, truthy: 'Active', falsey: 'Pending' )
		if status
			truthy
		else
			falsey
		end

	end
end

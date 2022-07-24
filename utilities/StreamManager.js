
const processor = async (kmessage) => {	
	if(kmessage.event_name == "tenant_created") {
		try {
			await tenant.create({
				data: kmessage.properties
			});
		}
		catch(error) {
			console.log(error);
		}
	}
	else if (kmessage.event_name == "user_created") {
		try {
			await user.create({
				data: kmessage.properties
			});
		}
		catch(error) {
			console.log(error);
		}
	}
};

module.exports = { processor };

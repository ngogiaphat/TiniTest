import {isObjectEqual} from "../../../utils/common";
// @ts-ignore
Component({
	data: {
		orderInfo: {},
		orderSteps: [
			{
				status: "",
				description: "",
			},
		],
	},
	props: {
		isLoading: false,
		order: {
			id: "",
			tracking: {},
			buyer: {},
			seller: {},
		},
	},
	methods: {
		onMoveTrackingDetail(){
      // @ts-ignore
			my.navigateTo({
        url: "pages/tracking-detail/index",
      });
		},
	},
	deriveDataFromProps(nextProps){
		if(isObjectEqual(this.props, nextProps)){
      return;
    }
		if(nextProps.order.id){
			const {tracking} = nextProps.order;
			const steps = [{
        id: tracking.id,
        status: tracking.status,
        description: tracking.date,
      }];
			this.setData({
				orderSteps: steps,
			});
		}
	},
});
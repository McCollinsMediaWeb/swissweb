import React, { useEffect }  from 'react';

// Layout
//import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import Header from "../layout/header";
import ServicesSection from "../elements/services-1";
import ChooseUsSection from "../elements/choose-us";
import ScheduleServiceSection from "../elements/schedule-service";
import TeamOneSection from "../elements/team-1";
import TestimonialSection from "../elements/testimonial";
import LatestBlogSection from "../elements/latest-blog-slider";
import { useTranslation } from 'react-i18next';
import HeroBanner from '../elements/widget/HeroBanner';
import AboutUsFourSection from "../elements/about-us-4";
import AboutUsThreeSection from "../elements/about-us-3";
import { ElfsightWidget } from 'react-elfsight-widget';

function Index() {

	const { t } = useTranslation();



	const handleRefresh = (url) => {
		window.location.href = url;
	};

		
		return (
			<>
			
				<Header />
				
				<HeroBanner />

				{/* <h1>{t('welcome')}</h1>


					<button onClick={()=>handleRefresh("/en")}>English</button>
					<button onClick={()=>handleRefresh("/ar")}>Arabic</button> */}
				<AboutUsFourSection/>
				
				
				
				<ServicesSection />

				<AboutUsThreeSection/>
				
				<ChooseUsSection />
				
				<ScheduleServiceSection />
				
				
				<TeamOneSection />
				
				<TestimonialSection />
				{/* <iframe src='https://widget-153800baf3784e00bcabad3c5675eb3c.elfsig.ht' width='100%' height='1000' frameborder='0'></iframe> */}
				<div className='wid-cst'>
				<ElfsightWidget widgetId={"153800ba-f378-4e00-bcab-ad3c5675eb3c"} lazy />;
				<ElfsightWidget widgetId={"4d5c4a86-db7a-46b3-9d85-a65483b969c1"} lazy />;
				
				</div>
				<LatestBlogSection />
				
				<Footer />
				
			</>
		);
}

export default Index;
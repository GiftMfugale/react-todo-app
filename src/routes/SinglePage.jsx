import { useParams } from "react-router-dom";

const  aboutData= [
    {
        slug: 'about-app',
        title: 'About the app',
        description: ' The application lets us add todos, edit, and delete items. Log in  to see the delete feature. It also persisits todos in the browser local storage for a subsequent visit ',
    },
     {
        slug: 'about-developer',
        title: 'About the developer',
        description: 'Gift Mfugale founded mfugaleLogic.com to experiment with new web features and write actionable guides. Follow Mfuglae on Twitter @mfugalelogic to lean more on  morden web development  '
    }
];
const SinglePage = () => {
const {slug} = useParams();
const aboutContent =  aboutData.find((item) => item.slug ===slug);
const {title, description} = aboutContent
    return (
        <div className="main_content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default SinglePage;
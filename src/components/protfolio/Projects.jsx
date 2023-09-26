import CrimePrediction from '../../assets/CrimePrediction.jpg'
import ProtfolioImg from '../../assets/Protfolio.jpeg'
import Signal from '../../assets/signal.jpeg'
// import CrimeMap from '../../assets/map.html'

const Projects = [
    {
        id: 1,
        img: CrimePrediction,
        title: 'Spatio-Temporal Crime Hotspot Prediction',
        tags: 'Python, Pytorch, Machine Learning, Agent-Based Modeling',
        // content: 'Trained CNN-LSTM, Random Forest models to predict different kinds of crime rates and corresponding location by using 100+ years of public NYC crime data with spatio and temporal dimentions. And visualization tool was also built using Folium.',
        content: 'Taking into account spatio-temporal, seasonal, and meteorological levels, the model used machine learning models to predict crime hotspots in New York City. It also developed a data-driven Agent-Based model to simulate criminal activities.',
        demo: 'https://github.com/Wreathmoon/spatio-temporal-crime-hotspot-prediction#crime-prediction-model-demo',
        code: 'https://github.com/Wreathmoon/spatio-temporal-crime-hotspot-prediction'
    },
    {
        id: 2,
        img: ProtfolioImg,
        title: 'Personal Portfolio Development',
        tags: 'React, html, css, Amazon Web Services, Amplify',
        content: 'Website development using React with customized components of dark/light mode switcher, interactive navbar, project cards etc. And this project was deploied by Amplify server of Amazon Web Services with CI/CO workflow.',
        demo: 'https://www.wreathmoon.com',
        code: 'https://github.com/Wreathmoon/WreathmoonPortfolio'
    },
    {
        id: 3,
        img: Signal,
        title: 'Signal Modulation Classifier',
        tags: 'Python, Deep Learning,, Signal Modulation, Resnet, Pytorch',
        content: 'Developed a Deep learning based ResNet model for signal modulation classification with 24 modulation modes and IQ dual channels with different signal noise ratio. Applied Tkinter to developed graphical user interface.',
        demo: 'https://github.com/Wreathmoon/Signal_Modulation_Classifier_ResNet',
        code: 'https://github.com/Wreathmoon/Signal_Modulation_Classifier_ResNet'
    }
]

export default Projects
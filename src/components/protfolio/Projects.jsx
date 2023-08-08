import CrimePrediction from '../../assets/CrimePrediction.png'
import ProtfolioImg from '../../assets/Protfolio.jpeg'
import Signal from '../../assets/signal.jpeg'
// import CrimeMap from '../../assets/map.html'

const Projects = [
    {
        id: 1,
        img: CrimePrediction,
        title: 'Agent-based Crime Prediction Model',
        tags: 'Python, Time Series, Pytorch, LSTM, Deep Learning, Agent-Based',
        content: 'Trained CNN-LSTM, Random Forest models to predict different kinds of crime rates and corresponding location by using 100+ years of public NYC crime data with spatio and temporal dimentions. And visualization tool was also built using Folium.',
        demo: 'https://github.com/Wreathmoon?tab=repositories',
        code: 'https://github.com/Wreathmoon?tab=repositories'
    },
    {
        id: 2,
        img: ProtfolioImg,
        title: 'Personal Portfolio Development',
        tags: 'React, Amazon Web Services, Amplify',
        content: 'Website development using React with custom component of interactive navbar, project cards, dark/light mode, language selection etc. And this project was deploied by Amplify of Amazon Web Services with CI/CO workflow.',
        demo: 'https://github.com/Wreathmoon/WreathmoonPortfolio',
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
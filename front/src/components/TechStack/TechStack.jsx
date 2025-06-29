import styles from './TechStack.module.css'
import expressIcon from '../../assets/expressIcon.svg'
import mongoIcon from '../../assets/mongoIcon.svg'
import nestIcon from '../../assets/nestIcon.svg'
import postgresIcon from '../../assets/postgresIcon.svg'
import reactIcon from '../../assets/reactIcon.svg'
import tailwindIcon from '../../assets/tailwindIcon.svg'
import typescriptIcon from '../../assets/typescriptIcon.svg'
import javascriptIcon from '../../assets/javascriptIcon.svg'
import cssIcon from '../../assets/cssIcon.svg'
import htmlIcon from '../../assets/htmlIcon.svg'
import gitIcon from '../../assets/gitIcon.svg'
import gitHubIcon from '../../assets/github.svg'
import nodeIcon from '../../assets/nodeIcon.svg'
import npmIcon from '../../assets/npmIcon.svg'
import vsIcon from '../../assets/vsIcon.svg'
import fastApiIcon from '../../assets/fastapiIcon.svg'
import materialUiIcon from '../../assets/materialuiIcon.svg'
import pythonIcon from '../../assets/pythonIcon.svg'
import scrumIcon from '../../assets/scrumIcon.svg'
import flaskIcon from '../../assets/flaskIcon.svg'
import figmaIcon from '../../assets/figmaIcon.svg'
import bootstrapIcon from '../../assets/bootstrapIcon.svg'
import awsS3Icon from '../../assets/awsS3.svg'
import awsLambdaIcon from '../../assets/awsLambda.svg'
import awsEC2Icon from '../../assets/awsEC2.svg'
import kafkaIcon from '../../assets/kafkaIcon.svg'

export function TechStack(){
    return(
        <>
        <div id="formacion"></div>
        <div className='tech-stack-section'>
            <h2 className={styles['TechStackH2']}>Tecnologías</h2>
            <div className={styles['TechStackBody']}>
                    <div className={styles['FrontStack']}>
                        <h3>Frontend</h3>
                        <div className={styles['TechCards']}>
                            <div className={styles['TechCard']}>
                                <img src={htmlIcon} alt="" />
                                <p>HTML</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={cssIcon} alt="" />
                                <p>CSS</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={javascriptIcon} alt="" />
                                <p>Javascript</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={reactIcon} alt="" />
                                <p>ReactJs</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={tailwindIcon} alt="" />
                                <p>Tailwind</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={bootstrapIcon} alt="" />
                                <p>Bootstrap</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={materialUiIcon} alt="" />
                                <p>Material UI</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={flaskIcon} alt="" />
                                <p>Flask</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['BackStack']}>
                        <h3>Backend</h3>
                        <div className={styles['TechCards']}>
                            <div className={styles['TechCard']}>
                                <img src={typescriptIcon} alt="" />
                                <p>Typescript</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={nodeIcon} alt="" />
                                <p>NodeJs</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={expressIcon} alt="" />
                                <p>ExpressJs</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={nestIcon} alt="" />
                                <p>NestJs</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={mongoIcon} alt="" />
                                <p>MongoDB</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={postgresIcon} alt="" />
                                <p>PostgreSQL</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={pythonIcon} alt="" />
                                <p>Python</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={fastApiIcon} alt="" />
                                <p>FastAPI</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={kafkaIcon} alt="" />
                                <p>Kafka</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles['ToolStack']}>
                        <h3>Herramientas</h3>
                        <div className={styles['TechCards']}>
                            <div className={styles['TechCard']}>
                                <img src={vsIcon} alt="" />
                                <p>VSCode</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={gitIcon} alt="" />
                                <p>Git</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={gitHubIcon} alt="" />
                                <p>GitHub</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={npmIcon} alt="" />
                                <p>npm</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={figmaIcon} alt="" />
                                <p>Figma</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={scrumIcon} alt="" />
                                <p>SCRUM</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={awsS3Icon} alt="" />
                                <p>S3 (AWS)</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={awsLambdaIcon} alt="" />
                                <p>Lambda (AWS)</p>
                            </div>
                            <div className={styles['TechCard']}>
                                <img src={awsEC2Icon} alt="" />
                                <p>EC2 (AWS)</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
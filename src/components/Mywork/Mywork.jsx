import Card from "../Card/Card";
import { Container } from "./MyworkStyle";


const Mywork = () => {
    // const projectList = [
    //     {
    //         icon: ,
    //         name: "",
    //         desc: "",
    //     },

    //     {
    //         icon: ,
    //         name: "",
    //         desc: "",
    //     },

    //     {
    //         icon: ,
    //         name: "",
    //         desc: "",
    //     },

    //     {
    //         icon: ,
    //         name: "",
    //         desc: "",
    //     },
    // ]
  return (
    <Container>
         <h1 className="pro"> PROJECTS </h1>
         <p>These are some interesting and fun projects i have worked on</p>
        {/* <section className='projects'>
				{projectList.map((item, indx) => (
					<Card key={indx} icon={item.icon} name={item.name} desc={item.desc} />
				))}
        
			</section> */}

      <div className="links">
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://certificate.terrahq.co/75012M25I16RUE14"
          >SideHustle Front-end web development Certificate
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.udemy.com/certificate/UC-e5edf5b8-553d-40bf-b4d4-633fc49f49d8/"
          >Udemy Front-end web development Certificate
          </a>
        </li>
        </ul>
      </div>
    </Container>
  )
}

export default Mywork
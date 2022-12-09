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
         <h1> PROJECTS </h1>
         <p>These are some interesting and fun projects i have worked on</p>
        {/* <section className='projects'>
				{projectList.map((item, indx) => (
					<Card key={indx} icon={item.icon} name={item.name} desc={item.desc} />
				))}
        
			</section> */}
    </Container>
  )
}

export default Mywork
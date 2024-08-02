import * as C from './styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import photoPerfil from '../../assets/images/perfil.jpg';

import { PortfolioItem } from '../../components/PortfolioItem/index';
import { SkillItem } from '../../components/SkillItem/index';
import { Links } from '../../components/Links/index';
import { Images } from '../../data/Images';
import { iconsData } from '../../data/iconsData';


export const Home = () => {
    const message = '';
    const linkZap = `https://wa.me//${import.meta.env.VITE_NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;

    return (
        <C.PageContainer>
           <C.Presentation>
                <div className='left-side'>
                    <h2>OLÁ 👋 EU SOU O BRUNO</h2>
                    <div className='TitleReact'>
                        <h1>REACT</h1>
                            <div className='titleLinks'>
                                <Links />
                            </div>
                    </div>
                    <h1>DEVELOPER</h1>
                </div>
                <div className='right-side'>
                    <div className='img'>
                        <img src={photoPerfil} alt={photoPerfil} />
                    </div>
                </div>
           </C.Presentation>

           <C.About>
                <div>
                    <h2>Sobre mim</h2>
                    <h1>Sou um Desenvolvedor Front-end</h1>
                    <p>
                        Olá, sou o Bruno, um jovem de 22 anos apaixonado por series filmes leitura e jogos. Sou
                        uma pessoa que aprecia a tranquilidade de estar em casa, codando projetos. Iniciei minha jornada
                        na programação para se tornar um desenvolvedor front-end em março de 2023, uma area que me encanta
                        com suas possibilidades infinitas. Atualmente, estou estudando Desenvolvimento Front-end através de 
                        cursos e projetos pessoais, tenho como foco em aprimorar minhas skills na área de desenvolvimento web.
                        Estou entusiasmado com a oportunidade de encontrar meu primeiro emprego como desenvolvedor!
                    </p>
                </div>
           </C.About>

           <C.Skills>
                    <h1>Minhas Skills</h1>
                    <div className='icons'>
                        {iconsData.map((item, index) => (
                            <SkillItem 
                                key={index} 
                                img={item.icon} 
                                name={item.name}
                            />
                        ))}
                    </div>
           </C.Skills>

           <C.Portfolio>
                <h1>Meu Portifólio</h1>
                <div className='area-portifolios'>    
                    {Images.map((item, index)=>(
                        <PortfolioItem key={index} data={item}/>    
                    ))}
                </div>
                <div className='listProjetos'>
                    <button>Ver Todos Projetos</button>
                </div>
           </C.Portfolio>
           
           <C.Contact>
                <h1>Contato</h1>
                <div className='ctc'>
                    <WhatsAppIcon style={{color: '#CCC', fontSize: 30, cursor: 'pointer'}}/>
                    <p >
                        <a 
                            className='link' 
                            href={linkZap} 
                            target='_blank'>(11) 9 4800-4143
                        </a>
                    </p>
                </div>
                <div className='ctc'>
                    <PhoneIcon style={{color: '#CCC', fontSize: 30, cursor: 'pointer'}}/>
                    <p>(11) 9 5906-5952</p>
                </div>
                <div className='ctc'>
                    <EmailIcon style={{color: '#CCC', fontSize: 30, cursor: 'pointer'}}/>
                    <p>brunnolima@gmail.com</p>
                </div>
                <div className='ctc'>
                    <RoomIcon style={{color: '#CCC', fontSize: 30, cursor: 'pointer'}}/>
                    <p>SP - Itapevi</p>
                </div>

            </C.Contact>    

        </C.PageContainer>
    )
}
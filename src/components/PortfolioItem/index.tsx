import { ImageType } from '../../types/ImageType';
import * as C from './styles';

type Props = {
    data: ImageType;
}
export const PortfolioItem = ({data}: Props) => {
    return (
        <C.PortContainer>
            <C.leftSide>
                <img src={data.img} alt=''/>
            </C.leftSide>
            
            <C.RightSide>
                <C.AreaTitle>
                    <h2>{data.title}</h2>
                    <div>
                        {data.icons.map((it: any) => <img src={it} alt={it} />)}
                    </div>
                </C.AreaTitle>
                <C.BodyArea>
                    <p>{data.body}</p>
                    
                    <a href={data.urlProjeto} target='_blank'>
                        <button className='btn' style={{ border: '2px solid white', background: 'white', color: 'black'}}>Ver Projeto</button>
                    </a>
                    <a href={data.urlRepositorio} target='_blank'>
                        <button className='btn' style={{ border: '2px solid aqua', color: 'white', background: ' rgb(40, 35, 104)'}}>{"< Repositório />"}</button>
                    </a>
                </C.BodyArea>
            </C.RightSide>
        </C.PortContainer>
    )
}
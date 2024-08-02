import * as C from './styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Links = () => {
    return (
        <C.Container>
            <div className='icon'>
                <a target="_blank" href="https://www.instagram.com/bruno_lima7/">
                    <InstagramIcon style={{color: '#fff', width: 30, height: 30}}/>
                </a>
            </div>
            <div className='icon'>
                <a target="_blank" href="https://github.com/brunolima64">
                    <GitHubIcon style={{color: '#fff', width: 30, height: 30}}/>
                </a>
            </div>
            <div className='icon'>
                <a target="_blank" href="https://www.linkedin.com/in/bruno-henrique-lima-barbosa-456564283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <LinkedInIcon style={{color: '#fff', width: 30, height: 30}}/>
                </a>
            </div>
        </C.Container>
    )
}
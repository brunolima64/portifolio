import * as C from './styles';

type Props = {
    img: string;
    name: string;
}
export const SkillItem = ({img, name}: Props) => {
    return (
        <C.Icon>
            <img src={img} alt={img} />
            <p>{name}</p>
        </C.Icon>
    )
}
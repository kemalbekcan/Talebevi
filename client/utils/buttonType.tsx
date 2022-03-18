import { GoSearch } from "react-icons/go";
import {BsTelephoneFill} from 'react-icons/bs'
import { GrMail } from "react-icons/gr";
import { RiGlobalFill } from "react-icons/ri";
const buttonType = [
    {
        id:0,
        name: 'SEARCH',
        icon: <GoSearch />
    },
    {
        id:1,
        name: 'TELEPHONE',
        icon: <BsTelephoneFill />
    },
    {
        id:2,
        name: 'MAİL',
        icon: <GrMail />
    },
    {
        id:3,
        name: 'GLOBAL',
        icon: <RiGlobalFill/>
    }
]

export default buttonType
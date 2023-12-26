import Swal from "sweetalert2";
import {  useNavigate } from 'react-router-dom';
const Delspace = () => { 
    const navi = useNavigate()
    Swal.fire('삭제 완료').then(()=>{navi()});
};


export {Delspace};
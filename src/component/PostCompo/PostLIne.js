import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DelBlogById } from '../../DataUtils/AxiosDelete';
import {Delspace} from '../SweetAlert/DelAlert';

const FlexDiv = styled.div`
    display: flex;
    width: 100%;
`;

const FlexLinkDiv = styled.div`
    flex: 1;
    padding: 0 20px 0 20px;
`;

export default function PostLine({ blogInfo }) {
    const handleDel = async (id) => {
        const result= await DelBlogById(id)
        Delspace()
        console.log('del');
    };
    //console.log(blogInfo);
    return (
        <>
            <FlexDiv>
                <div>{blogInfo.blogId}</div>
                <FlexLinkDiv>
                    <Link to={`/post/${blogInfo.blogId}`}>
                        <div>{blogInfo.title}</div>
                    </Link>
                </FlexLinkDiv>

                <button onClick={() => {handleDel(blogInfo.blogId)}}>DEL</button>
            </FlexDiv>

            <hr />
        </>
    );
}

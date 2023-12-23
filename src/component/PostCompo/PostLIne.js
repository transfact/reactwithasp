import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    width: 100%;
`;

const FlexLinkDiv = styled.div`
    flex: 1;
    padding: 0 20px 0 20px;
`;

export default function PostLine({ blogInfo }) {
    const handleDel = () => {
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

                <button onClick={handleDel}>DEL</button>
            </FlexDiv>

            <hr />
        </>
    );
}

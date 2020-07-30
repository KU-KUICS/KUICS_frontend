import { TransitionGroup, CSSTransition } from 'react-transition-group'
import React from 'react'
import styled from 'styled-components'
import Emoji from 'a11y-react-emoji'

import './PostList.scss'
import { Link } from 'react-router-dom'

interface postListType {
    boardNo: number
    title: string
    excerpt: string
    pathname: string
    category: string
    key: number
}

const PostList: React.FC<postListType> = ({ boardNo, title, excerpt, pathname, category }, key) => {
    const pageTrans = 'trans'
    const classNames = {
        appear: `${pageTrans} appear`,
        appearDone: `${pageTrans} appear done`,
    }
    //console.log(pathname)
    //console.log(pathname + '/' + boardNo)

    return (
        <TransitionGroup className="transitionGroup card">
            <CSSTransition key={key} classNames={classNames} timeout={300} appear>
                <ColumnBox key={key}>
                    <RowBox>
                        <PostNumber>#{boardNo}</PostNumber>
                        <Title>
                            <Link to={`${category}/${boardNo}`}>{title}</Link>
                        </Title>
                        <TagList>
                            <Tag color="green" textColor="white">
                                <span className="tagText">Active&nbsp;</span>
                                <Emoji symbol="✅" label="checked" />
                            </Tag>
                            <Tag color="purple" textColor="white">
                                <span className="tagText">Improvement needed&nbsp;</span>
                                <Emoji symbol="👷🏼‍♂️" label="constructing" />
                            </Tag>
                        </TagList>
                    </RowBox>
                    <ContentRowBox>
                        <TagExcerpt>
                            <CommentColumnBox>
                                <div>3900 comments</div>
                                <div>3000 views</div>
                                <div>2020-02-22</div>
                            </CommentColumnBox>
                            {excerpt ? excerpt : 'none.'}
                        </TagExcerpt>
                    </ContentRowBox>
                    <hr className="separator" />
                </ColumnBox>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default PostList

interface TagProps {
    readonly color: string
    readonly textColor: string
}

const Tag = styled.div<TagProps>`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: ${props => props.color};
    span {
        color: ${props => props.textColor};
    }
    padding: 0px 5px 0px 5px;
    font-size: 0.9375rem;
    margin: 0px 0px 0px 5px;
    border-radius: 5px;
    height: 1.5rem;
    flex-shrink: 0;
    vertical-align: top;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`

const TagList = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
`

//color: #f8f9fa;
const Title = styled.div`
    font-weight: 600;
    font-size: 1.3125rem;
`

//color: #dee2e6;
const TagExcerpt = styled.div`
    font-weight: 400;
    font-size: 1rem;
`

const ColumnBox = styled.div`
    flex-shrink: 0;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    min-height: 4rem;

    padding: 1rem 1.125rem 0rem 1.125rem;
    padding-bottom: 0;
`

const CommentColumnBox = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    text-align: right;
    flex-grow: 1;
    flex-shrink: 0;
    padding-left: 1rem;
    font-size: 0.9375rem;
    float: right;
`
//color: #ced4da;

// color: #ced4da;
const PostNumber = styled.div`
    font-weight: 500;
    padding-right: 1rem;
    font-size: 1rem;
    align-self: inherit;
`

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.875rem;
`

const ContentRowBox = styled(RowBox)`
    justify-content: space-between;
`
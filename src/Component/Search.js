import React, { useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const Search = () => {
    const [state, setState] = useState(false)

    return (
        <RowBox>
            <Write>
                <BsPlusCircle style={{ top: '2px', width: '1.5rem', height: '1.5rem', position: 'relative' }} />{' '}
                &nbsp;글쓰기
            </Write>
            <StyledSearch>
                <SearchBar />
            </StyledSearch>
        </RowBox>
    )
}

export default Search

const AdvancedSearch = styled.div`
    overflow-y: hidden;
`

const Write = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`

const StyledSearch = styled.span`
    flex-grow: 1;
    flex-basis: 0;

    text-align: right;
    font-size: 1.5rem;
`

const RowBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: -webkit-fill-available;
    width: fill-available;
    padding: 2rem;
`

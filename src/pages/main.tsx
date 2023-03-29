import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { PageWrapper } from './components/PageWrapper';
import { InputWrapper } from './components/InputWrapper';
import { Input } from './components/Input';
import { ResultsWrapper } from './components/ResultsWrapper';
import { Result } from './components/Result';

export const Main = () => {
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const [input, setInput] = useState<string>(urlParams.get('query') ?? '')
    const [list, setList] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
        search(event.target.value)
    }

    const search = async (query?: string) => {
        const response = await axios.get(`http://localhost:5000/search${query ? `/?query=${query}` : ''}`)
        setList(response.data)
        navigate(query ? `?query=${query}` : '');
    }

    useEffect(() => {
        search(urlParams.get('query') ?? undefined)
        //rule disabled because is causing loop
        // eslint-disable-next-line
    }, [])

    return (
        <PageWrapper>
            <div>
                <InputWrapper>
                    <Input
                        id='search'
                        placeholder='Type to search...'
                        value={input}
                        onChange={handleChange}
                    />
                </InputWrapper>
                <ResultsWrapper>
                    {list.map((value, index) => (
                        <Result key={index}>
                            {value}
                        </Result>
                    ))}
                </ResultsWrapper>
            </div>
        </PageWrapper>
    )
}
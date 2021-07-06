import React from 'react'
import { Table } from './Table'
import { SearchBar } from './SearchBar'
export const Home = () => {
    return (
        <div>
            <h1>Welcome to your Commerce Place</h1>
            <SearchBar/>
            <Table/>
        </div>
    )
}

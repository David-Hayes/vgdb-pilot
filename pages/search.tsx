import type { NextPage } from 'next'
import { useState, SyntheticEvent } from 'react'
import { apiSearch } from '../libs/api/ApiRoutes'
import { Main } from '../components/template/Main'
import { Loader } from '../components/ui/Loader'
import { GameCard } from '../components/ui/GameCard'

const Search: NextPage = () => {
  const [searchState, setSearchState] = useState({
    query: '',
    results: [],
    loading: false,
    searched: false,
    totalResults: 0,
  })

  const handleSearchSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    handleSearch()
  }

  const handleSearch = async () => {
    setSearchState({ ...searchState, loading: true, searched: true })
    await fetch(apiSearch, {
      method: 'POST',
      body: JSON.stringify({ query: searchState.query }),
    }).then(async (response) => {
      if (response.ok) {
        const results = await response.json()
        setSearchState({
          ...searchState,
          results: results,
          loading: false,
          totalResults: Number(response.headers.get('x-count')),
          searched: true,
        })
      }
    })
  }

  return (
    <Main title="Search">
      <form onSubmit={handleSearchSubmit} className="mb-8">
        <div className="bg-gray-700 w-min mx-auto flex items-center shadow-md py-4 px-5 rounded-md overflow-hidden">
          <input
            type="text"
            className="bg-transparent w-56 border-none focus:outline-none focus:ring-0 placeholder-current p-0 mr-3"
            placeholder="Search"
            defaultValue={searchState.query}
            onChange={(e) =>
              setSearchState({ ...searchState, query: e.target.value })
            }
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      {searchState.searched && (
        <>
          {searchState.loading ? (
            <Loader />
          ) : (
            <>
              {searchState.results.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-10">
                  {searchState.results.map((game, index) => (
                    <GameCard key={index} data={game} />
                  ))}
                </div>
              ) : (
                <>No results</>
              )}
            </>
          )}
        </>
      )}
    </Main>
  )
}

export default Search

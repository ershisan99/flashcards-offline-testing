import { useMeQuery } from '../../services'

export const Decks = () => {
  const { data: me } = useMeQuery()

  console.log({ me })

  return (
    <div>
      <h1>Decks</h1>
    </div>
  )
}

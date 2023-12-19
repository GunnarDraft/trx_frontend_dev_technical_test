import styles from './page.module.css'

// async function getData() {
//   const res = await fetch('')

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }


export default async function Home() {
  // const data = await getData()

  return (
    <main className={styles.main}>
      <div className={styles.description}> 
      </div>
    </main>
  )
}

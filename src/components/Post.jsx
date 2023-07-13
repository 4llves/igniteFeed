import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/4llves.png"
            alt=""
          />

          <div className={styles.authorInfo}>
            <strong>Alves Jhonata</strong>
            <span>Front | Back | RPA</span>
          </div>
        </div>

        <time title="11 de maio às 08:13h" dateTime="2023-07-12">
          Publicado à 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>
          </p>
        </p>
      </div>
    </article>
  )
}

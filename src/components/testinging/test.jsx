export default function Child({ innerRef }) {
    return(
      <section ref={innerRef} className='hiddene'>
        <h1>Hello World!</h1>
      </section>
    )
  };
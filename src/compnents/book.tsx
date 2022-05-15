export default function Book(props: any) {
    const { book } = props;
    return (
        <>
            <p><img src={book.book_img} alt={book.book_title} /></p>
            <p>{book.book_title}</p>
            <p>{book.book_impression}</p>
        </>
    );
}
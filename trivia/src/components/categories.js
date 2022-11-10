let qUrl = 'https://opentdb.com/api.php?amount=10&category='

export const Categories = ({topicId, category, setUrl, setSelectedCategoryId}) => {

    return (
        <>
        <button onClick={() => {setUrl(qUrl + topicId); setSelectedCategoryId(topicId)}}>{category}</button>
        </>
    )
}
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface Comment{
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getData = async (url: string): Promise<Comment[]> => {
  const response = await fetch(url)
  
  return await response.json()
}

getData(COMMENTS_URL)
  .then(data => {
    data.map((item=>{
      console.log((`ID: ${item.id}, Email: ${item.email}`))
    }))
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
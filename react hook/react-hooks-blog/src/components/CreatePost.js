import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
function CreatePost() {
  const title = useFormInput('');
  const subtitle = useFormInput('');
  const content = useFormInput('');
  function handleSumit(e) {
    e.preventDefault();
    if (title.value === '' || subtitle.value === '' || content.value === '') {
      console.error('please enter the fields');
      window.alert('!!fields are empty!!');
      return;
    }
    console.log('title', title.value);
    console.log('subtitle', subtitle.value);
    console.log('content', content.value);
    firestore.collection('posts').add({
      title: title.value,
      subtitle: subtitle.value,
      content: content.value,
      createAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSumit}>
        <div className="form-field">
          <label>Title</label>
          <input type="text" {...title} />
        </div>
        <div className="form-field">
          <label>Subtitle</label>
          <input type="text" {...subtitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

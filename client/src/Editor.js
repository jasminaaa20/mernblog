// import ReactQuill from "react-quill";

// export default function Editor({value, onChange}) {
//     const modules = {
//         toolbar: [
//             ['bold', 'italic', 'underline', 'strike'],
//             ['blockquote', 'code-block'],
//             [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//             [{ 'script': 'sub'}, { 'script': 'super' }],
//             [{ 'indent': '-1'}, { 'indent': '+1' }],
//             [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//             ['link', 'image'],
//             [{ 'color': [] }, { 'background': [] }],
//             [{ 'font': [] }],
//             [{ 'align': [] }],
//             ['clean']
//         ]
//     }

//     const formats = [
//         'header', 'font', 'size',
//         'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
//         'list', 'bullet', 'script', 'indent',
//         'link', 'image', 'color', 'background', 'align'
//     ]

//   return (
//     <div className="content">
//     <ReactQuill
//       value={value}
//       theme={'snow'}
//       onChange={onChange}
//       modules={modules}
//       formats={formats} />
//     </div>
//   );
// }

import ReactQuill from "react-quill";

export default function Editor({value,onChange}) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  return (
    <div className="content">
    <ReactQuill
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules} />
    </div>
  );
}
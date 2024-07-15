
/*
import React, { useEffect, useState } from 'react';
import '../App.css';

const Docs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/basic_syntax')
      .then(response => response.json())
      .then(data => {
        // Extract the nested basic_syntax array from the response
        setData(data.basic_syntax);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching basic_syntax:', error);
        setError(error);
        setLoading(false);
      });
      console.log(data)
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="docs-container">
      <h1>Markdown Guide</h1>
      {data && data.map((item, index) => (
        <div key={index} className="ex1">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {item.examples.map((example, idx) => (
            <div key={idx}>
              <h3>Example {idx + 1}</h3>
              <pre>{example.markdown}</pre>
              <div dangerouslySetInnerHTML={{ __html: example.html }} />
            </div>
          ))}
          {item.additional_examples && item.additional_examples.length > 0 && (
            <div>
              <h3>Additional Examples:</h3>
              {item.additional_examples.map((additionalExample, addIdx) => (
                <div key={addIdx}>
                  <h4>{additionalExample.name}</h4>
                  <p>{additionalExample.description}</p>
                  <pre>{additionalExample.markdown}</pre>
                  <div dangerouslySetInnerHTML={{ __html: additionalExample.html }} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Docs;



/*import React, { useEffect, useState } from 'react';
import '../App.css';

const Docs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/db.json')
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="docs-container">
      <h1>Markdown Guide</h1>
      {data && data.map((item, index) => (
        <div key={index} className="ex1">
          <h2>{item.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      ))}
    </div>
  );
};

export default Docs;

*/
import React, { useEffect, useState } from 'react';
import '../App.css';

const Docs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') //you can use any API and update your code
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          return response.text().then(text => {
            throw new TypeError("Received content is not JSON");
          });
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="docs-container">
      <h1>Markdown Docs</h1>
      {data && data.map((item, index) => (
        <div key={index} className="ex1">
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Docs;

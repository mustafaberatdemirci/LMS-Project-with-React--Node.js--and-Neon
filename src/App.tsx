import React, { useState, useEffect } from 'react';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';
import axios from 'axios';

interface Course {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:3000/api/courses/${editingId}`, {
          title,
          description,
        });
      } else {
        await axios.post('http://localhost:3000/api/courses', {
          title,
          description,
        });
      }
      setTitle('');
      setDescription('');
      setEditingId(null);
      fetchCourses();
    } catch (error) {
      console.error('Error saving course:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleEdit = (course: Course) => {
    setTitle(course.title);
    setDescription(course.description);
    setEditingId(course.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Course Management System</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Course Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
          >
            <PlusCircle size={20} />
            {editingId ? 'Update Course' : 'Add Course'}
          </button>
        </form>

        <div className="grid gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(course)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex items-center gap-1"
                >
                  <Pencil size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center gap-1"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
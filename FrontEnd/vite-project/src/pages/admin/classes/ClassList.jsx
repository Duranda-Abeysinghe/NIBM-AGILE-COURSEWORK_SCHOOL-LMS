import { useEffect, useState } from 'react';
import API from '../../../api/axios';
import { useLanguage } from '../../../context/LanguageContext';

export default function ClassList() {
  const { t } = useLanguage();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/classes')
      .then(res => setClasses(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import blogShape from "../../assets/blog-shape.png";
import blog1 from "../../assets/blog-1.png";
import blog2 from "../../assets/blog-2.png";
import blog3 from "../../assets/blog-3.png";

const newsData = [
  {
    id: 1,
    category: "Sports",
    title: "Annual Sports Meet 2025 - Kg/galigamuwa central college",
    date: "Mar 06, 2024",
    comments: 19,
    likes: 45,
    shares: 12,
    image: blog1,
    description:
      "ගලිගමුව මද්‍ය විද්‍යාලීය සිසුන් සහ කාර්යය මන්ඩලය මගින් සංවිදානය කරනු ලබන Sports Meet 2025...",
  },
  {
    id: 2,
    category: "Technology",
    title: "Tec Day 2024 - Kg/Galigamuwa Central College",
    date: "Oct 12, 2024",
    comments: 9,
    likes: 32,
    shares: 8,
    image: blog2,
    description:
      "ගලිගමුව මධ්‍ය විද්‍යාලයීය තාක්ෂණික දිනය පසුගිය දින පැවැත්වුණු අතර...",
  },
  {
    id: 3,
    category: "Dance",
    title: "වෙස් මංගල්‍ය - Kg/Galigamuwa Central College",
    date: "Oct 10, 2021",
    comments: 9,
    likes: 27,
    shares: 5,
    image: blog3,
    description:
      "2024 වර්ෂයේ ගලිගමුව මධ්‍ය විද්‍යාලයීය සිසු දරුවන්ගේ වෙස් මංගල්‍යයේ විශේෂ අවස්ථාවන්...",
  },
];

export default function NewsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);

  const [activeCard, setActiveCard] = useState(null);
  const [interactionState, setInteractionState] = useState({});

  useEffect(() => {
    // Initialize interaction state from news data
    const initialState = {};
    newsData.forEach(news => {
      initialState[news.id] = {
        liked: false,
        likes: news.likes,
        comments: news.comments,
        shares: news.shares,
        commentText: "",
        showComments: false,
        shareMenuOpen: false
      };
    });
    setInteractionState(initialState);
  }, []);

  const handleCardHover = (id) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };
  
  const handleLike = (id) => {
    setInteractionState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        liked: !prev[id].liked,
        likes: prev[id].liked ? prev[id].likes - 1 : prev[id].likes + 1
      }
    }));
  };
  
  const handleComment = (id) => {
    setInteractionState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        showComments: !prev[id].showComments
      }
    }));
  };
  
  const handleCommentChange = (id, text) => {
    setInteractionState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        commentText: text
      }
    }));
  };
  
  const submitComment = (id) => {
    if (interactionState[id].commentText.trim()) {
      setInteractionState(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          comments: prev[id].comments + 1,
          commentText: ""
        }
      }));
    }
  };
  
  const toggleShareMenu = (id) => {
    setInteractionState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        shareMenuOpen: !prev[id].shareMenuOpen
      }
    }));
  };
  
  const handleShare = (id, platform) => {
    setInteractionState(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        shares: prev[id].shares + 1,
        shareMenuOpen: false
      }
    }));
    
    // Here you could implement actual share functionality
    console.log(`Shared article ${id} on ${platform}`);
  };

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-white to-green-50 overflow-hidden"
      id="blog"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-40"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-yellow-100 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Section Header with Animation */}
        <div data-aos="fade-up">
          <p className="inline-block text-green-700 text-lg font-semibold mb-3 bg-green-100 px-4 py-1 rounded-full">Latest Articles</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 pb-20" data-aos="fade-up">
            Get News With <span className="text-green-500">Galigamuwa</span><br /> Central College
          </h1>
        </div>

        {/* Featured News Card */}
        <div className="mb-16" data-aos="zoom-in">
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition duration-500 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                <img
                  src={newsData[0].image}
                  alt={newsData[0].title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {newsData[0].category}
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center text-gray-500 text-sm gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <i className="bi bi-calendar-week"></i> {newsData[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="bi bi-wechat"></i> {newsData[0].comments}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-green-700 transition">
                    {newsData[0].title}
                  </h3>
                  <p className="text-gray-700 font-sinhala leading-relaxed mb-6">
                    {newsData[0].description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-green-700 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <div className="flex gap-2">
                    {interactionState[1] && (
                      <>
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <span>{interactionState[1]?.likes || newsData[0].likes}</span>
                          <button 
                            onClick={() => handleLike(1)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${interactionState[1]?.liked ? 'bg-red-100 text-red-500' : 'bg-gray-100 hover:bg-red-50'}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={interactionState[1]?.liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <span>{interactionState[1]?.comments || newsData[0].comments}</span>
                          <button 
                            onClick={() => handleComment(1)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${interactionState[1]?.showComments ? 'bg-blue-100 text-blue-500' : 'bg-gray-100 hover:bg-blue-50'}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-1 text-gray-600 text-sm relative">
                          <span>{interactionState[1]?.shares || newsData[0].shares}</span>
                          <button 
                            onClick={() => toggleShareMenu(1)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${interactionState[1]?.shareMenuOpen ? 'bg-green-100 text-green-500' : 'bg-gray-100 hover:bg-green-50'}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                          
                          {interactionState[1]?.shareMenuOpen && (
                            <div className="absolute right-0 bottom-10 bg-white shadow-lg rounded-lg p-2 w-40 z-10">
                              <button 
                                onClick={() => handleShare(1, 'facebook')}
                                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
                              >
                                <span className="w-5 h-5 flex items-center justify-center text-blue-600">
                                  <i className="bi bi-facebook"></i>
                                </span>
                                Facebook
                              </button>
                              <button 
                                onClick={() => handleShare(1, 'twitter')}
                                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
                              >
                                <span className="w-5 h-5 flex items-center justify-center text-blue-400">
                                  <i className="bi bi-twitter-x"></i>
                                </span>
                                Twitter
                              </button>
                              <button 
                                onClick={() => handleShare(1, 'whatsapp')}
                                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
                              >
                                <span className="w-5 h-5 flex items-center justify-center text-green-500">
                                  <i className="bi bi-whatsapp"></i>
                                </span>
                                WhatsApp
                              </button>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {interactionState[1]?.showComments && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value={interactionState[1]?.commentText || ""}
                        onChange={(e) => handleCommentChange(1, e.target.value)}
                        className="flex-1 bg-gray-100 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                      />
                      <button 
                        onClick={() => submitComment(1)}
                        disabled={!interactionState[1]?.commentText?.trim()}
                        className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center disabled:opacity-50"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.slice(1).map((news, index) => (
            <div
              key={news.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition duration-500 transform hover:scale-105 hover:shadow-2xl z-0`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onMouseEnter={() => handleCardHover(news.id)}
              onMouseLeave={handleCardLeave}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={news.image}
                  alt={news.title}
                  className={`h-full w-full object-cover transition duration-700 ${activeCard === news.id ? 'scale-110' : 'group-hover:scale-110'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-6 text-left relative">
                <div className={`absolute -top-6 right-6 bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition duration-500 ${activeCard === news.id ? 'rotate-45 bg-green-700' : 'hover:bg-green-700'}`}>
                  <i className="bi bi-arrow-right text-xl"></i>
                </div>
                <div className="flex items-center text-gray-500 text-sm gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <i className="bi bi-calendar-week"></i> {news.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bi bi-wechat"></i> {news.comments}
                  </div>
                </div>
                <h3 className={`text-lg font-semibold mb-3 transition duration-300 ${activeCard === news.id ? 'text-green-700' : 'hover:text-green-700'}`}>
                  {news.title}
                </h3>
                <p className="text-gray-700 font-sinhala leading-relaxed mb-4">
                  {news.description}
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-4">
                      {interactionState[news.id] && (
                        <>
                          <button 
                            onClick={() => handleLike(news.id)}
                            className="flex items-center gap-1 text-sm transition-all"
                          >
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${interactionState[news.id]?.liked ? 'bg-red-100 text-red-500' : 'text-gray-500 hover:text-red-500'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={interactionState[news.id]?.liked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={interactionState[news.id]?.liked ? 1.5 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </span>
                            <span className={interactionState[news.id]?.liked ? "font-medium text-red-500" : "text-gray-500"}>
                              {interactionState[news.id]?.likes || news.likes}
                            </span>
                          </button>
                          
                          <button 
                            onClick={() => handleComment(news.id)}
                            className="flex items-center gap-1 text-sm transition-all"
                          >
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${interactionState[news.id]?.showComments ? 'bg-blue-100 text-blue-500' : 'text-gray-500 hover:text-blue-500'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </span>
                            <span className={interactionState[news.id]?.showComments ? "font-medium text-blue-500" : "text-gray-500"}>
                              {interactionState[news.id]?.comments || news.comments}
                            </span>
                          </button>
                          
                          <div className="relative">
                            <button 
                              onClick={() => toggleShareMenu(news.id)}
                              className="flex items-center gap-1 text-sm transition-all"
                            >
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center ${interactionState[news.id]?.shareMenuOpen ? 'bg-green-100 text-green-500' : 'text-gray-500 hover:text-green-500'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                              </span>
                              <span className={interactionState[news.id]?.shareMenuOpen ? "font-medium text-green-500" : "text-gray-500"}>
                                {interactionState[news.id]?.shares || news.shares}
                              </span>
                            </button>
                            
                            {interactionState[news.id]?.shareMenuOpen && (
                              <div className="absolute z-10 left-0 bottom-8 bg-white shadow-lg rounded-lg p-2 w-36">
                                <button 
                                  onClick={() => handleShare(news.id, 'facebook')}
                                  className="w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 flex items-center gap-2"
                                >
                                  <span className="w-5 h-5 flex items-center justify-center text-blue-600">
                                    <i className="bi bi-facebook"></i>
                                  </span>
                                  Facebook
                                </button>
                                <button 
                                  onClick={() => handleShare(news.id, 'twitter')}
                                  className="w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 flex items-center gap-2"
                                >
                                  <span className="w-5 h-5 flex items-center justify-center text-blue-400">
                                    <i className="bi bi-twitter-x"></i>
                                  </span>
                                  Twitter
                                </button>
                                <button 
                                  onClick={() => handleShare(news.id, 'whatsapp')}
                                  className="w-full text-left px-2 py-1 text-sm rounded hover:bg-gray-100 flex items-center gap-2"
                                >
                                  <span className="w-5 h-5 flex items-center justify-center text-green-500">
                                    <i className="bi bi-whatsapp"></i>
                                  </span>
                                  WhatsApp
                                </button>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">{Math.floor(Math.random() * 10) + 2} min read</div>
                  </div>
                  
                  {interactionState[news.id]?.showComments && (
                    <div className="mb-3 pb-2">
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          value={interactionState[news.id]?.commentText || ""}
                          onChange={(e) => handleCommentChange(news.id, e.target.value)}
                          className="flex-1 bg-gray-100 rounded-full px-3 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                        <button 
                          onClick={() => submitComment(news.id)}
                          disabled={!interactionState[news.id]?.commentText?.trim()}
                          className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center disabled:opacity-50"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <button className="text-green-700 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="flex flex-wrap justify-around text-center">
            <div className="px-4 py-2">
              <div className="text-3xl font-bold text-green-600">{
                Object.values(interactionState).reduce((sum, item) => sum + (item?.likes || 0), 
                  newsData.reduce((sum, item) => sum + item.likes, 0))
              }</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Total Likes</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-3xl font-bold text-blue-600">{
                Object.values(interactionState).reduce((sum, item) => sum + (item?.comments || 0), 
                  newsData.reduce((sum, item) => sum + item.comments, 0))
              }</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Comments</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-3xl font-bold text-purple-600">{
                Object.values(interactionState).reduce((sum, item) => sum + (item?.shares || 0), 
                  newsData.reduce((sum, item) => sum + item.shares, 0))
              }</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Total Shares</div>
            </div>
            <div className="px-4 py-2">
              <div className="text-3xl font-bold text-amber-600">{newsData.length}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Articles</div>
            </div>
          </div>
        </div>
            
        {/* View All News Button */}
        <div className="mt-10" data-aos="fade-up">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Decoration */}
        <img
          src={blogShape}
          alt="Decoration"
          className="absolute bottom-8 right-8 w-20 md:w-28 opacity-40 pointer-events-none animate-pulse"
        />
      </div>
    </section>
  );
}
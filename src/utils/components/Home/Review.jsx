import { useEffect, useState } from "react";
import "../Styles/ReviewComponent.css";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  const API_URL = "https://skillup-backend-production.up.railway.app/api/reviews";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const submitReview = async (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    
    if (!trimmedName) {
      setError("Please enter your name");
      return;
    }
    
    if (formData.rating < 1 || formData.rating > 5) {
      setError("Please select a rating between 1-5 stars");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: trimmedName
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit review");
      }

      const newReview = await response.json();
      setReviews((prev) => [newReview, ...prev]);
      setShowForm(false);
      setFormData({ name: "", comment: "", rating: 0 });
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const StarRating = ({ rating, interactive = false, onRate }) => (
    <div className={`stars ${interactive ? "interactive" : ""}`}>
      {[...Array(5)].map((_, i) => (
        <button
          type="button"
          key={i}
          className={`star ${i < rating ? "full" : ""}`}
          onClick={() => interactive && onRate(i + 1)}
          onMouseEnter={(e) => interactive && e.currentTarget.parentNode.querySelectorAll('.star').forEach((el, j) => 
            j <= i ? el.classList.add('hover') : el.classList.remove('hover')
          )}
          onMouseLeave={(e) => interactive && e.currentTarget.parentNode.querySelectorAll('.star').forEach(el => 
            el.classList.remove('hover')
          )}
          aria-label={`Rate ${i + 1} stars`}
        >
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              className="star-background"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </button>
      ))}
    </div>
  );

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );

  return (
    <section className="review-section">
      <div className="review-header">
        <div className="rating-summary">
          <div className="average-rating">
            <h2>{reviews.length > 0 
              ? (reviews.reduce((a, c) => a + c.rating, 0) / reviews.length).toFixed(1)
              : "0.0"}
            </h2>
            <StarRating rating={reviews.length > 0 
              ? Math.round(reviews.reduce((a, c) => a + c.rating, 0) / reviews.length)
              : 0} 
            />
          </div>
          <p className="review-count">{reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}</p>
        </div>
        <button className="write-review-btn" onClick={() => setShowForm(true)}>
          <span>✍️ Write Review</span>
        </button>
      </div>

      {showForm && (
        <div className="form-overlay">
          <form className="review-form" onSubmit={submitReview}>
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
                required
                className="name-input"
                maxLength={50}
              />
            </div>

            <div className="form-group">
              <label>Rating *</label>
              <StarRating
                interactive
                rating={formData.rating}
                onRate={(rating) => setFormData(prev => ({ ...prev, rating }))}
              />
            </div>

            <div className="form-group">
              <label>Comment *</label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Share your thoughts..."
                required
                maxLength={500}
                className="review-textarea"
              />
              <div className="character-count">
                {formData.comment.length}/500
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn primary">
                Submit Review
              </button>
              <button
                type="button"
                className="btn secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <article 
            key={review._id} 
            className="review-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <header className="review-header">
              <div className="user-avatar">
                {review.name?.charAt(0).toUpperCase() || "A"}
              </div>
              <div className="user-info">
                <h4>{review.name || "Anonymous"}</h4>
                <div className="review-meta">
                  <StarRating rating={review.rating} />
                  <time>
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </header>
            <p className="review-content">{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewComponent;
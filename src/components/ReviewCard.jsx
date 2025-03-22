import PropTypes from "prop-types";

const ratings = new Array(5).fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

// Specify icons that require a dark background for contrast
const darkBgIcons = ["/images/uxdi1.svg"];

const ReviewCard = ({ variant, content, imgSrc, name, company, className }) => {
  const figureBg = darkBgIcons.includes(imgSrc) ? "bg-zinc-800" : "bg-zinc-200";
  const commonContainer = "w-[420px] mx-auto transition-transform duration-300 hover:scale-105";

  return (
    <div className={`bg-zinc-900 rounded-2xl shadow-md border border-zinc-700 ${commonContainer} ${className}`}>
      {/* Upper Section: Review Content & Star Ratings */}
      <div className="p-5 border-b border-zinc-700">
        <div className="flex items-center gap-1 mb-2">
          {ratings.map(({ icon, style }, idx) => (
            <span
              key={idx}
              className="material-symbols-rounded text-yellow-400 text-sm"
              style={style}
            >
              {icon}
            </span>
          ))}
        </div>
        <p className="text-zinc-300 text-base leading-relaxed italic">
          "{content}"
        </p>
      </div>
      {/* Lower Section: Reviewer Info Group Centered */}
      <div className="p-5 flex justify-center">
        <div className="flex items-center gap-3">
          <figure className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-md shadow ${figureBg}`}>
            <img
              src={imgSrc}
              alt={name}
              loading="lazy"
              className="w-8 h-8 object-contain"
            />
          </figure>
          <div className="text-left">
            <p className="text-white font-semibold text-base">{name}</p>
            {company && (
              <p className="text-xs text-zinc-400 tracking-wide">{company}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  variant: PropTypes.number,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string,
  className: PropTypes.string,
};

ReviewCard.defaultProps = {
  variant: 5,
  company: "",
  className: "",
};

export default ReviewCard;

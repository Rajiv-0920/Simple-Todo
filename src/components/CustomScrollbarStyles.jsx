const CustomScrollbarStyles = () => (
  <style>{`
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #d1d5db; /* gray-300 */
        border-radius: 10px;
        border: 2px solid transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #9ca3af; /* gray-400 */
      }
      .dark .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: #4b5563; /* gray-600 */
      }
      .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #6b7280; /* gray-500 */
      }
      /* For Firefox */
      .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #d1d5db transparent;
      }
      .dark .custom-scrollbar {
        scrollbar-color: #4b5563 transparent;
      }
    `}</style>
);

export default CustomScrollbarStyles;

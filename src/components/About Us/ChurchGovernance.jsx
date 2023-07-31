import { motion } from "framer-motion";
import React,{ useState } from "react";

const ChurchGovernance = () => {

    const [seeMore, setSeeMore] = useState(true);

    const [hideContent, setHideContent] = useState(false)

    const viewMore = () =>{
        setSeeMore(false)
        setHideContent(true)
    }

    const HideContent = () =>{
        setSeeMore(true)
        setHideContent(false)
    }

  return (
    <>
      <div className='bg-[url("/src\assets\window.jpg")] p-28'>
        <div className="text-white leading-8 text-center">
          We are a spirit-led Church. The Lead Pastor serves as the Spiritual
          and Administrative Head of the Church under Christ Jesus. However, we
          subscribe to a model of Church Leadership that empowers the local
          Church Council of selected Holy Spirit-filled men and women to
          deliberate on all corporate and financial matters and come to
          spirit-led agreements on behalf of the larger congregations. Council
          members are chosen from among the congregation by the Pastorate.
          { seeMore && <span onClick={viewMore} className="text-blue-500 cursor-pointer "> &nbsp; see more</span> }
          <br /><br />
          { hideContent &&  <motion.p 
           animate={{y:0}}
           initial={{y:25}}
           exit={{y:25}}
           transition={{duration:1}}
          >
           The Lead Pastor presides over every meeting of the Church Council
            who serve for a term of two years and can serve for a maximum of two
            consecutive terms, before they are required by our byelaws to be
            replaced by new Holy Spirit-filled members chosen from the larger
            congregation. Important matters, such as those bothering on property
            purchase and disposal for example, are referred to the larger
            congregation for ratification and approval before final decisions
            are made. Council Member selection is also referred to the larger
            congregation for ratification in an annual membership meeting of the
            Church. The finances of the Church as well as the annual budget of
            the Church for all missionary and administrative programs are also
            presented and ratified during the annual membership meeting.
            <span onClick={HideContent} className="text-blue-500 cursor-pointer"> &nbsp; Hide </span>
          </motion.p> }
        </div>
      </div>
    </>
  );
};

export default ChurchGovernance;

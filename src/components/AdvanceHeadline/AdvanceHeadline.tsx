import MainLayout from '@components/MainLayout';
import React from 'react';

interface AdvanceHeadlineI {
    title?: string;
    subTitle?: string;
}

const AdvanceHeadline: React.FC<AdvanceHeadlineI> = ({ title, subTitle }) => {
    return (
        <MainLayout>
            <div className="mt-16 mb-4 text-center py-4">
                <span className="uppercase text-[14px]/7 text-third font-light">
                    {subTitle}
                </span>
                <h2
                    className="text-2xl/8 flex justify-center items-center mb-[10px] before:content-[''] before:mr-15 before:border-b-4 before:border-b-[#e1e1e1] before:flex-1 before:border-double before:self-center
                    after:ml-15 after:border-b-4 after:border-b-[#e1e1e1] after:flex-1 after:border-double after:self-center
"
                >
                    {title}
                </h2>
            </div>
        </MainLayout>
    );
};

export default AdvanceHeadline;

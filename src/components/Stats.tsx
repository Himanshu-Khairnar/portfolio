'use client';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const stats = [
    {
        num: 2,
        text: 'Years of experience',
    },
    {
        num: 8,
        text: 'Technologies Mastered',
    },
    {
        num: 500,
        text: 'Code Commits',
    },
];

const Stats = () => {
    const [repos, setRepos] = useState(0); // State to hold total repositories
    const username = 'Himanshu-Khairnar'; // Replace with the desired GitHub username

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (response.ok) {
                    const data = await response.json();
                    setRepos(data.length); // Set the number of repositories
                } else {
                    console.error('Failed to fetch repositories:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepos();
    }, [username]);

    return (
        <section className="pt-4 pb-12 xl:pt-8 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {/* Render static stats */}
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-center"
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p
                                className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                                    } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}

                    {/* Add total repositories as dynamic stats */}
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-center">
                        <CountUp
                            end={repos}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold"
                        />
                        <p className="max-w-[150px] leading-snug text-white/80">
                            Total Repositories
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

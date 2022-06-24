import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import img1 from "../../assets/img/menu/1.png";
import img2 from "../../assets/img/menu/2.png";
import img3 from "../../assets/img/menu/3.png";
import img4 from "../../assets/img/menu/4.png";
import img5 from "../../assets/img/menu/5.png";
import img6 from "../../assets/img/menu/6.png";
import img7 from "../../assets/img/menu/7.png";
import img8 from "../../assets/img/menu/8.png";
export default function HomeMenu() {
	return (
		<>
			<div className="container">
				<div className="header">
					<div className="header-menu">
						<div className="menu-left">
							<Link to="/">
								<button>
									<i class="fa fa-times"></i> <span>Close</span>
								</button>
							</Link>
						</div>
						<div className="menu-right">
							<div className="header-logo">
								<Link
									rel="noopener noreferrer"
									to="/"
									className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
								>
									<img src={logo} alt="logo" />
									<p>DaiQuocVietCorp</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="list">
					<h2 className="title">Lĩnh Vực</h2>
					<ul className="list-content">
						<li className="item">
							<div className="item-content">
								<Link to="/detail/technology">
									<div className="item-detail">
										<h2 className="number">01</h2>
										<img src={img1} alt="1" />
										<div className="item-detail-content">
											<h2>Công Nghệ</h2>
											<p>
												Công nghệ là lĩnh vực hạt nhân của DQV GROUP với những
												chiến lược đầu tư sâu rộng trong lĩnh vực công nghệ cao,
												cung cấp những giải pháp công nghệ và chuyển đổi số, ứng
												dụng vào nhiều lĩnh vực khác nhau mang đến trải nghiệm
												phong phú, tiện ích, hiện đại cho người sử dụng.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item item-plus">
							<div className="item-content">
								<Link to="/detail/travel">
									<div className="item-detail">
										<h2 className="number">02</h2>
										<img src={img2} alt="2" />
										<div className="item-detail-content">
											<h2>DU LỊCH - VUI CHƠI GIẢI TRÍ</h2>
											<p>
												Với tổ hợp nhiều loại hình giải trí khác nhau bao gồm du
												lịch, vui chơi và nghệ thuật, DQV GROUP tự hào khi sở
												hữu những nguồn lực chất lượng cao, đảm bảo sự phát
												triển mạnh mẽ và liên tục. Trong đó có đội ngũ nhân sự
												chuyên nghiệp phụ trách trong từng lĩnh vực hoạt động.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item">
							<div className="item-content">
								<Link to="/detail/house">
									<div className="item-detail">
										<h2 className="number">03</h2>
										<img src={img3} alt="3" />
										<div className="item-detail-content">
											<h2>BẤT ĐỘNG SẢN</h2>
											<p>
												Ở lĩnh vực bất động sản, DQV GROUP hoạt động trong lĩnh
												vực phát triển, chuyển nhượng và vận hành bất động sản
												nhà ở phức hợp thuộc nhiều phân khúc khác nhau từ cao
												cấp, trung cấp đến bình dân.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item">
							<div className="item-content">
								<Link to="/detail/education">
									<div className="item-detail">
										<h2 className="number">04</h2>
										<img src={img4} alt="4" />
										<div className="item-detail-content">
											<h2>GIÁO DỤC</h2>
											<p>
												Với tâm niệm đầu tư vào giáo dục để thực hiện khát vọng
												thay đổi tương lai của thế hệ trẻ Việt Nam, DQV GROUP
												hình thành hệ thống giáo dục theo định hướng ứng dụng
												công nghệ vào trong quá trình dạy và học.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item item-plus">
							<div className="item-content">
								<Link to="/detail/ecommerce">
									<div className="item-detail">
										<h2 className="number">05</h2>
										<img src={img5} alt="5" />
										<div className="item-detail-content">
											<h2>THƯƠNG MẠI ĐIỆN TỬ</h2>
											<p>
												Với những điểm khác biệt mang tính hiện đại và đột phá,
												DQV GROUP dẫn đầu là tập đoàn tiên phong khai phá thị
												trường trong lĩnh vực thương mại điện tử mới.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item">
							<div className="item-content">
								<Link to="/detail/industry">
									<div className="item-detail">
										<h2 className="number">06</h2>
										<img src={img6} alt="6" />
										<div className="item-detail-content">
											<h2>CÔNG NGHIỆP</h2>
											<p>
												Với hoạt động ở lĩnh vực công nghiệp, DQV GROUP tự hào
												là một chuyên gia trong lĩnh vực âm thanh – ánh sáng tại
												Việt Nam. Phát triển với tầm nhìn chung là sản xuất,
												phân phối thiết bị, giải pháp, dịch vụ trong lĩnh vực âm
												thanh, ánh sáng, hình ảnh cho sân khấu chuyên nghiệp,
												bar – club, phát thanh truyền hình, hội thảo và studio.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item">
							<div className="item-content">
								<Link to="/detail/medical">
									<div className="item-detail">
										<h2 className="number">07</h2>
										<img src={img7} alt="7" />
										<div className="item-detail-content">
											<h2>Y TẾ</h2>
											<p>
												Với mục tiêu phát triển nền công nghiệp dược phẩm Việt
												Nam ngang tầm khu vực, DQV GROUP từng bước hình thành
												các đặc khu công nghiệp dược và nuôi trồng dược liệu đặc
												thù, ưu tiên các dự án tạo sự đột phá trong sản xuất
												thuốc trong nước.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item item-plus">
							<div className="item-content">
								<Link to="/detail/sell">
									<div className="item-detail">
										<h2 className="number">08</h2>
										<img src={img8} alt="8" />
										<div className="item-detail-content">
											<h2>BÁN LẺ</h2>
											<p>
												Hệ thống bán lẻ DQV GROUP hoạt động với mục tiêu trở
												thành điểm mua sắm đáng tin cậy và trải nghiệm thú vị về
												những sản phẩm công nghệ.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</li>
						<li className="item "></li>
					</ul>
				</div>
			</div>
		</>
	);
}

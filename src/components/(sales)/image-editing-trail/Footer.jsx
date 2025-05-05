export default function ImageEditingTrialFooter() {
    return (
        <footer className="bg-black text-white padding-x padding-y">
            <div className="flex items-center justify-between">
                <h4>
                    &copy; Web Briks LLC. All Rights Reserved{' '}
                    {new Date().getFullYear()}.
                </h4>

                <ul className="flex items-center gap-10">
                    <li>
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
